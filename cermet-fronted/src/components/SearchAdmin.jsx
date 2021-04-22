import React from 'react'
import { Button, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap'

const SearchAdmin = ({data,fungsi,fungsiDropdown}) => {
    return (
        <InputGroup className="mt-3">
            <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Kegiatan"
            id="input-group-dropdown-1"
            
            >
            <Dropdown.Item onClick={()=>fungsiDropdown("All")}>Semua</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>fungsiDropdown("Beasiswa")}>Beasiswa</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>fungsiDropdown("Lomba")}>Lomba </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>fungsiDropdown("Internship")} >Internship</Dropdown.Item>
            </DropdownButton>
            <FormControl onChange={e=>fungsi(e.target.value)} aria-describedby="basic-addon1" />
        </InputGroup>
    )
}

export default SearchAdmin
