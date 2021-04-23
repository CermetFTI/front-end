import React from 'react'
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap'

const SearchEvent = ({filterData,filterKategori,display}) => {
    return (
                <InputGroup style={{maxWidth:"600px"}} className="shadow mb-5 bg-white rounded">
                    <FormControl
                    placeholder="Events"
                    aria-label="Events"
                    aria-describedby="basic-addon2"
                    onChange={e=>filterData(e.target.value)}
                    />
                    <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-primary"
                    title={`${display}`}
                    id="input-group-dropdown-2"
                    >
                    <Dropdown.Item onClick={()=>filterKategori("All")}>Semua</Dropdown.Item>
                    <Dropdown.Item onClick={()=>filterKategori("Beasiswa")}>Beasiswa</Dropdown.Item>
                    <Dropdown.Item onClick={()=>filterKategori("Lomba")}>Lomba</Dropdown.Item>
                    <Dropdown.Item onClick={()=>filterKategori("Internship")}>Internship</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
    )
}

export default SearchEvent
