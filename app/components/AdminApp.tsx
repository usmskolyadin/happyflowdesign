import * as React from "react";
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateField,
  required,
  minValue,
  maxValue,
  email,
  BooleanField,
  ReferenceField,
  FileInput, FileField,
  ImageInput,
  ImageField,
  EditButton
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import dataProvider from "../admin/dataProvider";

const validateRequired = required("Обязательное поле");
const validateEmail = [required("Email обязателен"), email()];
const validatePositive = [required(), minValue(0)];
const validatePrice = [required(), minValue(0), maxValue(1000000)];

// const UserList = (props: any) => (
//   <List {...props}>
//     <Datagrid rowClick="edit">
//       <TextField source="id" />
//       <TextField source="name" />
//       <TextField source="email" />
//       <TextField source="role" />
//       <DateField source="createdAt" />
//       <DateField source="updatedAt" />
//     </Datagrid>
//   </List>
// );

// const UserEdit = (props: any) => (
//   <Edit {...props}>
//     <SimpleForm>
//       <TextInput source="name" validate={validateRequired} />
//       <TextInput source="email" validate={validateEmail} />
//       <TextInput source="role" validate={validateRequired} />
//     </SimpleForm>
//   </Edit>
// );

const UserCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
      <TextInput source="role" defaultValue="USER" validate={validateRequired} />
    </SimpleForm>
  </Create>
);

const FactorList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="value" />
      <BooleanField source="isPositive" />
      <BooleanField source="isActive" />
      <TextField source="category" />
    </Datagrid>
  </List>
);

const FactorEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="description" />
      <NumberInput source="value" validate={validatePrice} />
      <BooleanInput source="isPositive" />
      <BooleanInput source="isActive" />
      <TextInput source="category" />
    </SimpleForm>
  </Edit>
);

const FactorCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="description" />
      <NumberInput source="value" validate={validatePrice} />
      <BooleanInput source="isPositive" defaultValue={true} />
      <BooleanInput source="isActive" defaultValue={true} />
      <TextInput source="category" />
    </SimpleForm>
  </Create>
);

const FactorValueList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField label="Calculation" source="calculationId" reference="calculations" />
      <ReferenceField label="Factor" source="factorId" reference="factors" />
      <BooleanField source="isApplied" />
    </Datagrid>
  </List>
);

const FactorValueEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="calculationId" reference="calculations">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="factorId" reference="factors">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isApplied" />
    </SimpleForm>
  </Edit>
);

const FactorValueCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="calculationId" reference="calculations">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="factorId" reference="factors">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isApplied" defaultValue={true} />
    </SimpleForm>
  </Create>
);

const CalculationList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="area" />
      <NumberField source="basePrice" />
      <NumberField source="totalPrice" />
      <TextField source="notes" />
      <TextField source="createdBy" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

const CalculationEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="area" validate={validatePositive} />
      <NumberInput source="basePrice" validate={validatePrice} />
      <NumberInput source="totalPrice" validate={validatePrice} />
      <TextInput source="notes" multiline />
      <TextInput source="createdBy" />
    </SimpleForm>
  </Edit>
);

const CalculationCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="area" validate={validatePositive} />
      <NumberInput source="basePrice" defaultValue={1500} validate={validatePrice} />
      <NumberInput source="totalPrice" validate={validatePrice} />
      <TextInput source="notes" multiline />
      <TextInput source="createdBy" />
    </SimpleForm>
  </Create>
);


const HeroList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="subtitle" />
      <TextField source="buttonText" />
    </Datagrid>
  </List>
);

export const HeroCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm >
      <TextInput source="title" />
      <TextInput source="subtitle" />
      <TextInput source="buttonText" />
      <FileInput source="image" label="Image">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const HeroEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm >
      <TextInput source="title" />
      <TextInput source="subtitle" />
      <TextInput source="buttonText" />
      <FileInput source="image" label="Image">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);


export const ProjectCardList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="price" />
      <BooleanField source="isFeatured" />
    </Datagrid>
  </List>
);

export const ProjectCardEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="price" />
      <TextInput source="description" multiline fullWidth />
      <BooleanInput source="isFeatured" />
      <ArrayInput source="pros">
        <SimpleFormIterator>
          <TextInput label="Плюс" source="0"/>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="cons">
        <SimpleFormIterator>
          <TextInput label="Минус" source="0"/>
        </SimpleFormIterator>
      </ArrayInput>
      <NumberInput source="order" />
    </SimpleForm>
  </Edit>
);

export const ProjectCardCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="price" />
      <TextInput source="description" multiline fullWidth />
      <BooleanInput source="isFeatured" />
      <ArrayInput source="pros">
        <SimpleFormIterator>
          <TextInput label="Плюс" source="0"/>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="cons">
        <SimpleFormIterator>
          <TextInput label="Минус" source="0"/>
        </SimpleFormIterator>
      </ArrayInput>
      <NumberInput source="order" />
    </SimpleForm>
  </Create>
);

const PricingList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="pricePerM2" />
    </Datagrid>
  </List>
);

const PricingEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="pricePerM2" validate={required()} />
    </SimpleForm>
  </Edit>
);

const PricingCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="pricePerM2" validate={required()} />
    </SimpleForm>
  </Create>
);



const PricingSectionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <NumberField source="order" />
    </Datagrid>
  </List>
);

export const PricingSectionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <ImageInput source="image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="duration" />
      <TextInput source="price" />
      <NumberInput source="order" />
      <ArrayInput source="features">
        <SimpleFormIterator>
          <TextInput label="Feature" source={""} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const PricingSectionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <ImageInput source="image" >
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="duration" />
      <TextInput source="price" />
      <NumberInput source="order" />
      <ArrayInput source="features">
        <SimpleFormIterator>
          <TextInput label="Feature" source={""} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const ExtraServiceBlockList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <NumberField source="order" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ExtraServiceBlockCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <ImageInput source="image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="order" />
      <ArrayInput source="features">
        <SimpleFormIterator>
          <TextInput label="Feature" source={""} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const ExtraServiceBlockEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <ImageInput source="image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="order" />
      <ArrayInput source="features">
        <SimpleFormIterator>
          <TextInput label="Feature" source={""} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);


const AdminApp: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} /> */}
    <Resource name="factors" list={FactorList} edit={FactorEdit} create={FactorCreate} />
    <Resource name="calculations" list={CalculationList} edit={CalculationEdit} create={CalculationCreate} />
    <Resource name="factorValues" list={FactorValueList} edit={FactorValueEdit} create={FactorValueCreate} />
    <Resource name="hero-sections" list={HeroList} edit={HeroEdit} create={HeroCreate} />
    <Resource name="project-cards" list={ProjectCardList} edit={ProjectCardEdit} create={ProjectCardCreate} />
    <Resource name="pricings" list={PricingList} edit={PricingEdit} create={PricingCreate} />
    <Resource name="pricing-cards" list={PricingSectionList} edit={PricingSectionEdit} create={PricingSectionCreate} />
    <Resource name="extra-service-blocks" list={ExtraServiceBlockList} edit={ExtraServiceBlockEdit} create={ExtraServiceBlockCreate}
  />
  </Admin>
);


export default AdminApp;
