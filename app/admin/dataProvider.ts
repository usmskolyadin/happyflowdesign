import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const customDataProvider = simpleRestProvider("/api", fetchUtils.fetchJson, "X-Total-Count");

const convertToFormData = (data: any) => {
  const formData = new FormData();

  for (const key in data) {
    if (key === "image" && data.image?.rawFile) {
      formData.append("image", data.image.rawFile);
    } else if (key === "features" && Array.isArray(data.features)) {
      data.features.forEach((f: string) => formData.append("features", f));
    } else if (data[key] !== undefined && data[key] !== null) {
      formData.append(key, data[key]);
    }
  }

  return formData;
};

const isFileUpload = (resource: string) =>
  ["hero-sections", "pricing-cards", "extra-service-blocks", "ready-packages", "repairs"].includes(resource);

const uploadAwareProvider = {
  ...customDataProvider,

  create: (resource: string, params: any) => {
    if (isFileUpload(resource)) {
      return fetchUtils
        .fetchJson(`/api/${resource}`, {
          method: "POST",
          body: convertToFormData(params.data),
        })
        .then(({ json }) => ({ data: json }));
    }

    return customDataProvider.create(resource, params);
  },

  update: (resource: string, params: any) => {
    if (isFileUpload(resource)) {
      const formData = convertToFormData({
        ...params.data,
        existingImageUrl: params.previousData?.imageUrl || "",
      });

      return fetchUtils
        .fetchJson(`/api/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }

    return customDataProvider.update(resource, params);
  },
};

export default uploadAwareProvider;
