import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";
import axios from 'axios';


const url = '/api/bachelors';


export const fetchBachelorProducts = () => async () => {
  
  const res = await fetch(url);
  const data =  await res.json();
  // const datas = data.map((faculty)=>faculty.faculty);
  console.log(data);
  return new Promise((resolve,reject)=>{
    resolve(data);
  // dispatch({
  //   type: FETCH_PRODUCTS,
  //   payload: data,
    
  // });
  
})
};

export const fetchBachelorBooks = async  (faculty) =>{
  let changeableUrl= url;
  console.log({faculty:faculty});
 if(faculty){
    changeableUrl = `${url}/${faculty}`;
    const res =  await fetch(changeableUrl);
              const products = await res.json();
              return new Promise((resolve,reject)=>{
                resolve(products);
              })
              
  }
  
     
  };

  export const fetchBachelorBook = async  (faculty,sem) =>{
    let changeableUrl= url;
    console.log({faculty:faculty,sem:sem})
    
    if(sem && faculty){
      changeableUrl = `${url}/${faculty}/${sem}`;
      console.log(changeableUrl);
      const res =  await fetch(changeableUrl);
      const products = await res.json();
      return new Promise((resolve,reject)=>{
        resolve(products);
      })
    }
       
    };




export const fetchIntermediateProducts = () => async (dispatch) => {
  const res = await fetch("/api/intermediates/intermediate");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const fetchSchoolProducts = () => async (dispatch) => {
    const res = await fetch("/api/schools/school");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
  };
  

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? -1
        : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};



