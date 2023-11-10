import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  adminManageBookingItem,
  adminManageContentItem,
  adminManageServiceItem,
  adminManageUserItem,
  commonItem,
  customerServiceItem,
  superAdminItem,
} from "@/constants/sidebarItem";
import { getUserInfo } from "@/services/auth.service";
import { USER_ROLE } from "@/constants/role";

function MyListItem({ item, open }: any): React.ReactElement {
  // console.log(item, open);
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
          {item?.icon}
        </ListItemIcon>
        <ListItemText primary={item?.label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}

const SidebarList = ({ open }: { open: boolean }) => {
    const { role } = getUserInfo() as any;
  return (
    <>
      <List sx={{ mb: 3 }}>
        {commonItem.map((item, index) => (
          <MyListItem key={item.key} open={open} item={item} />
        ))}
        {/* Customer Dashboard  */}
        {role === USER_ROLE.CUSTOMER && (
          <>
            <Divider />
            <Typography
              component={"p"}
              sx={{ pl: 3, pt: 2, display: open ? "static" : "none" }}
            >
              SERVICES
            </Typography>
            {customerServiceItem.map((item, index) => (
              <MyListItem key={item.key} open={open} item={item} />
            ))}
          </>
        )}
        {/* Admin Dashboard  */}
        {role === USER_ROLE.ADMIN && (
          <>
            <Typography
              component={"p"}
              sx={{ pl: 3, pt: 2, display: open ? "static" : "none" }}
            >
              MANAGE USERS
            </Typography>
            {adminManageUserItem.map((item, index) => (
              <MyListItem key={item.key} open={open} item={item} />
            ))}
            <Divider />
            <Typography
              component={"p"}
              sx={{ pl: 3, pt: 2, display: open ? "static" : "none" }}
            >
              MANAGE SERVICES
            </Typography>
            {adminManageServiceItem.map((item, index) => (
              <MyListItem key={item.key} open={open} item={item} />
            ))}
            <Divider />
            <Typography
              component={"p"}
              sx={{ pl: 3, pt: 2, display: open ? "static" : "none" }}
            >
              MANAGE BOOKINGS
            </Typography>
            {adminManageBookingItem.map((item, index) => (
              <MyListItem key={item.key} open={open} item={item} />
            ))}
            <Divider />
            <Typography
              component={"p"}
              sx={{ pl: 3, pt: 2, display: open ? "static" : "none" }}
            >
              MANAGE CONTENTS
            </Typography>
            {adminManageContentItem.map((item, index) => (
              <MyListItem key={item.key} open={open} item={item} />
            ))}
          </>
        )}
        {/* Super Admin Dashboard  */}
        {role === USER_ROLE.SUPER_ADMIN && (
          <>
            <Divider />
            <Typography
              component={"p"}
              sx={{ pl: 3, pt: 2, display: open ? "static" : "none" }}
            >
              MANAGE ADMINS
            </Typography>
            {superAdminItem.map((item, index) => (
              <MyListItem key={item.key} open={open} item={item} />
            ))}
          </>
        )}
      </List>
    </>
  );
};

export default SidebarList;
