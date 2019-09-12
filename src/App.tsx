import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Theme, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { browser } from './browsers';
import ErrorBoundary from './components/ErrorBoundary';
import SideBar from './components/SideBar';
import { BookmarkProvider } from './context/bookmark-context';

const drawerWidth = 500;

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    marginLeft: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

class App extends Component {
  public state: any = {
    bookmarks: [],
  };

  public async componentDidMount() {
    let data = await browser.getBookmarkTree();
    data = browser.filterBookmarks(data);

    this.setState({ bookmarks: data });
  }
  public render() {
    const { classes }: any = this.props;
    return (
      <BookmarkProvider intialState={this.state}>
        <div className={classes.root}>
          <ErrorBoundary>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  Unified Bookmark
                </Typography>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
              <Drawer
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
              >
                <>
                  <div className={classes.toolbar} />
                  <Divider />
                  <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                      (text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      )
                    )}
                  </List>
                  <Divider />
                  <SideBar />
                </>
              </Drawer>
            </nav>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <p>testing</p>
            </main>
          </ErrorBoundary>
        </div>
      </BookmarkProvider>
    );
  }
}

export default withStyles(styles)(App);
