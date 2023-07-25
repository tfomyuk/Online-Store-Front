import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {



    return (
       
        <AppbarContainer>
            <AppbarHeader>JetCat.space</AppbarHeader>
            <MyList type='row'>
                <ListItemText primary='Кружки' />
                <ListItemText primary='Шопери' />
                <ListItemText primary='Футболки' />
                <ListItemText primary='Пазли' />
                <ListItemText primary='Інше' />
                <ListItemText primary='Контакти' />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
        );
    }