import React from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
const SearchOption = () => {
    return (
        <div md="8" className="container">
                <MDBCol>
                    <form className="form-inline mt-4 mb-4">
                        <MDBIcon icon="search" />
                        <input className="text-center form-control form-control-sm ml-3 w-100" type="text" placeholder="Search Jobs" aria-label="Search" />
                    </form>
                </MDBCol>
        </div>
    );
};

export default SearchOption;