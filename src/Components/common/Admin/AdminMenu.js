import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import MuiLink from '@mui/material/Link';
import PersonAdd from '@mui/icons-material/PersonAdd';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import StarBorder from '@mui/icons-material/ArrowRightAlt';
import PauseIcon from '@mui/icons-material/Pause';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditNoteIcon from '@mui/icons-material/EditNote';
import GavelIcon from '@mui/icons-material/Gavel';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteIcon from '@mui/icons-material/Note';
import RemoveIcon from '@mui/icons-material/Remove';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import TaskIcon from '@mui/icons-material/Task';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TodayIcon from '@mui/icons-material/Today';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function AdminMenu() {
    
  const [Nestedopen1, setNestedOpen1] = React.useState(false);
  const [Nestedopen2, setNestedOpen2] = React.useState(false);
  const [Nestedopen3, setNestedOpen3] = React.useState(false);
  const [Nestedopen4, setNestedOpen4] = React.useState(false);
  const [Nestedopen5, setNestedOpen5] = React.useState(false);
  const [Nestedopen6, setNestedOpen6] = React.useState(false);
  const [Nestedopen7, setNestedOpen7] = React.useState(false);
  const [Nestedopen8, setNestedOpen8] = React.useState(false);
  //const [Nestedopen9, setNestedOpen9] = React.useState(false);
  //const [Nestedopen10, setNestedOpen10] = React.useState(false);
 
  const handleClick1 = () => {
    setNestedOpen1(!Nestedopen1);
  };
  const handleClick2 = () => {
    setNestedOpen2(!Nestedopen2);
  };
  const handleClick3 = () => {
    setNestedOpen3(!Nestedopen3);
  };
  const handleClick4 = () => {
    setNestedOpen4(!Nestedopen4);
  };
  const handleClick5 = () => {
    setNestedOpen5(!Nestedopen5);
  };
  const handleClick6 = () => {
    setNestedOpen6(!Nestedopen6);
  };
  const handleClick7 = () => {
    setNestedOpen7(!Nestedopen7);
  };
  const handleClick8 = () => {
    setNestedOpen8(!Nestedopen8);
  };
  // const handleClick9 = () => {
  //   setNestedOpen9(!Nestedopen9);
  // };
  // const handleClick10 = () => {
  //   setNestedOpen10(!Nestedopen10);
  // };
    
   

  return (
    
    <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              className='mini'
              aria-labelledby="nested-list-subheader"
              
            >
{/*--------------------Side Navigation--------------------------------------*/}
      <ListItemButton className='navhover' component={Link} to="/dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton className='navhover' onClick={handleClick1}>
         <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Client" />
        {Nestedopen1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen1} timeout="auto" unmountOnExit>
          <ListItemButton component={Link} to="/client/add" sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItemButton>
          <ListItemButton component={Link} to="/client/remove" sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonOffIcon />
            </ListItemIcon>
            <ListItemText primary="Remove" />
          </ListItemButton>
          <ListItemButton component={Link} to="/client/view" sx={{ pl: 4 }}>
            <ListItemIcon>
              <ManageAccountsIcon/>
            </ListItemIcon>
            <ListItemText primary="View" />
          </ListItemButton>
      </Collapse>
      
      
      <ListItemButton className='navhover' onClick={handleClick2}>
        <ListItemIcon>
          <FolderCopyIcon />
        </ListItemIcon>
        <ListItemText primary="Cases" />
        {Nestedopen2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Running" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PauseIcon />
            </ListItemIcon>
            <ListItemText primary="Waiting" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CloseIcon/>
            </ListItemIcon>
            <ListItemText primary="Closed" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton className='navhover' onClick={handleClick3}>
        <ListItemIcon>
          <FilePresentIcon />
        </ListItemIcon>
        <ListItemText primary="Document" />
        {Nestedopen3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Storage" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Template" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton className='navhover' onClick={handleClick4}>
        <ListItemIcon>
          <TaskIcon />
        </ListItemIcon>
        <ListItemText primary="Task" />
        {Nestedopen4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Assign" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Track" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton className='navhover'>
        <ListItemIcon>
          <TodayIcon/>
        </ListItemIcon>
        <ListItemText primary="Calender" />
      </ListItemButton>

      <ListItemButton className='navhover' onClick={handleClick5}>
        <ListItemIcon>
          <CurrencyRupeeIcon />
        </ListItemIcon>
        <ListItemText primary="Billing & Time Track" />
        {Nestedopen5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Time Entry" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Billing" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Innovice" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton className='navhover'>
        <ListItemIcon>
          <LocalPhoneIcon/>
        </ListItemIcon>
        <ListItemText primary="Communication" />
      </ListItemButton>

      <ListItemButton className='navhover' onClick={handleClick6}>
        <ListItemIcon>
          <EditNoteIcon />
        </ListItemIcon>
        <ListItemText primary="Notes" />
        {Nestedopen6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen6} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Remove" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Manage" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton className='navhover' onClick={handleClick7}>
        <ListItemIcon>
          <GavelIcon />
        </ListItemIcon>
        <ListItemText primary="Court Hearing" />
        {Nestedopen7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen7} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Dates" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Failing" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Judgement Track" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton className='navhover' onClick={handleClick8}>
        <ListItemIcon>
          <ManageAccountsIcon />
        </ListItemIcon>
        <ListItemText primary="My Dashboard" />
        {Nestedopen8 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={Nestedopen8} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="To-Do" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}

export default AdminMenu;