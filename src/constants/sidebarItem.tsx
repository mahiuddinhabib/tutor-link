import { AccountCircle, Help, Password } from "@mui/icons-material";

interface ISidebarItem {
  label: string;
  key: string;
  icon: React.ReactElement;
}

export const commonItem: ISidebarItem[] = [
  { label: "Profile", key: "profile", icon: <AccountCircle /> },
  { label: "Change Password", key: "change-password", icon: <Password /> },
];

export const customerServiceItem: ISidebarItem[] = [
  { label: "Running", key: "running", icon: <Help /> },
  { label: "Pending", key: "pending", icon: <Help /> },
  { label: "History", key: "history", icon: <Help /> },
];

export const adminManageUserItem: ISidebarItem[] = [
  { label: "Customer", key: "customer", icon: <Help /> },
  { label: "Tutor", key: "tutor", icon: <Help /> },
];

export const adminManageServiceItem: ISidebarItem[] = [
  { label: "Services", key: "services", icon: <Help /> },
  { label: "Add New Service", key: "add-new-service", icon: <Help /> },
  { label: "Available Service", key: "available-service", icon: <Help /> },
  {
    label: "Create New Available Service",
    key: "create-new-available-service",
    icon: <Help />,
  },
];

export const adminManageBookingItem: ISidebarItem[] = [
  { label: "Bookings", key: "bookings", icon: <Help /> },
  { label: "Booking Request", key: "booking-equest", icon: <Help /> },
  { label: "Booking History", key: "Booking-history", icon: <Help /> },
];

export const adminManageContentItem: ISidebarItem[] = [
  { label: "FAQ", key: "faq", icon: <Help /> },
  { label: "Blog", key: "blog", icon: <Help /> },
];

export const superAdminItem: ISidebarItem[] = [
  { label: "Admin", key: "admin", icon: <Help /> },
  { label: "Manage Permission", key: "manage-permission", icon: <Help /> },
];
