import React, {useState} from "react"
import {
    Button,
    Alert,
    TextField,
    Tabs,
    Tab,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Menu,
    MenuItem,
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Example = () => {
    // Menu uchun state va funksiyalar
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <section className="py-10">
            <div className="container mx-auto flex flex-col gap-5 px-5">
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-blue-500 font-semibold">
                        Production-ready components
                    </h3>
                    <h2 className="text-3xl font-bold mt-2">
                        Beautiful and powerful,
                        <br />
                        <span className="text-blue-500">
                            right out of the box
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="p-5 h-[240px] flex flex-col justify-between items-center border border-gray-200">
                        <Tabs
                            value={1}
                            textColor="primary"
                            indicatorColor="primary">
                            <Tab label="Small" />
                            <Tab label="Medium" />
                            <Tab label="Large" />
                        </Tabs>
                        <Button
                            variant="contained"
                            startIcon={<ShoppingCartIcon />}
                            className="mt-5">
                            ADD TO CART
                        </Button>
                        <p className="text-sm font-medium self-start">Button</p>
                    </div>

                    <div className="p-5 h-[240px] flex flex-col justify-between items-center border border-gray-200">
                        <Tabs
                            value={0}
                            textColor="primary"
                            indicatorColor="primary">
                            <Tab label="Standard" />
                            <Tab label="Filled" />
                            <Tab label="Outlined" />
                        </Tabs>
                        <Alert severity="info" className="mt-5">
                            Check out this alert!
                        </Alert>
                        <p className="text-sm font-medium self-start">Alert</p>
                    </div>

                    <div className="p-5 h-[240px] flex flex-col justify-between items-center border border-gray-200">
                        <Tabs
                            value={0}
                            textColor="primary"
                            indicatorColor="primary">
                            <Tab label="Outlined" />
                            <Tab label="Standard" />
                            <Tab label="Filled" />
                        </Tabs>
                        <TextField
                            label="Username"
                            variant="outlined"
                            defaultValue="Ultraviolet"
                        />
                        <p className="text-sm font-medium self-start">
                            Text Field
                        </p>
                    </div>

                    <div className="p-5 h-[240px] flex flex-col justify-between items-center border border-gray-200">
                        <p> </p>
                        <Button variant="text" onClick={handleClick}>
                            Click to open
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                                My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        <p className="text-sm font-medium self-start">Menu</p>
                    </div>

                    <div className="p-5 h-[240px] flex flex-col justify-between items-center border border-gray-200">
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="font-bold">
                                            Dessert
                                        </TableCell>
                                        <TableCell className="font-bold">
                                            Calories
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Frozen yoghurt</TableCell>
                                        <TableCell>109</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Cupcake</TableCell>
                                        <TableCell>305</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <p className="text-sm font-medium self-start">Table</p>
                    </div>

                    <div className="p-5 h-[240px] flex flex-col justify-center gap-2 items-center border border-gray-200 text-center">
                        <Typography variant="h6" className="font-bold">
                            Want to see more?
                        </Typography>
                        <Typography variant="body2">
                            Check out the docs for details of the <br />{" "}
                            complete library.
                        </Typography>
                        <Button variant="text" color="primary">
                            Learn more
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Example
