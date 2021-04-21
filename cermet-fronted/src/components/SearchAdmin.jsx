import React from 'react'
import { Button, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap'

const SearchAdmin = () => {
    return (
        <InputGroup className="mt-3">
            <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Kegiatan"
            id="input-group-dropdown-1"
            >
            <Dropdown.Item href="#">Beasiswa</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Lomba </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Internship</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" />
            <InputGroup.Append>
                <Button variant="outline-success">Search</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default SearchAdmin
