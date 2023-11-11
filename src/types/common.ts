export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  error: {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  };
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IService {
  id: string;
  title: string;
  tutorId: string;
  price: string;
  subjectId: string;
}

export interface IBooking {
  id: string;
  status: string;
  userId: string;
  availableServiceId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
}

export interface IHeadCell {
  value: string;
  label: string;
}

export interface ITablePropTypes {
  headCells: IHeadCell[];
  items: Record<string, any>[];
  children?: (item: Record<string, any>) => React.ReactNode;
  order?: "asc" | "desc";
  setOrder?: (value: "asc" | "desc") => void;
  orderBy?: string;
  setOrderBy?: (value: string) => void;
  page?: number;
  setPage?: (value: number) => void;
  rowsPerPage?: number;
  setRowsPerPage?: (value: number) => void;
}
