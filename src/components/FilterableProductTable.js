import React from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = (props) =>{
    return(
        <div>
        <h1>IronSTore</h1>
        <SearchBar/>
        <ProductTable products ={this.props.products}/>
        </div>
       
    )
}

export default FilterableProductTable;