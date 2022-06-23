import logo from './logo.svg';
import './App.css';
import React, { useDeferredValue } from 'react';
import { useState, useEffect } from "react";
import MaterialTable from "material-table";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const columns = [
    { title: "Budget Name", field: "budgetName" },
    { title: "DIstributor Name", field: "distributorName" },
    { title: "Month", field: "month" },
    { title: "Budget Bucket Name", field: "budgetBucketName" },
    { title: "Year", field: "year" },
    { title: "Allocated Budget Amount", field: "allocatedBudgetAmount" },
    { title: "Remaining Budget Amount",field:"remainingBudgetAmount"}
  ];

  useEffect(() => {
    fetch("http://172.107.33.108:1009/api/BudgetManagement/GetBudgetSummary?year=2022",
    {
      method:"POST"
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const url=""
  //       const result = await fetch(
  //         `http://172.107.33.108:1009/api/BudgetManagement/GetBudgetSummary?year=2022`,

  //         {
  //           method: "POST",
  //         }
  //       );
  //       const userreq = await result.json();
  //       setSearchTerm(userreq);
  //       // console.log(userreq);
  //       // console.log(userreq.data.month=="Jan"?console.log(userreq.data.remainingBudgetAmount):console.log("Hello"))
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setIsLoading(false);
  //   };
    
  //   fetchData();
  // }, [searchTerm]);
  // console.log(columns)

  return (
    <div className="App">
    <h1 align="center">React-App</h1>
    <h4 align="center">Material Table</h4>
    <MaterialTable title="Employee Data" data={data} columns={columns} />
  </div>
  );
}

export default App;
