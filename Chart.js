import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import { useState } from "react";
const Chart = () =>{
    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
      ); 
    return <div>
        <BarChart width={730} height={250} data={transactions}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="category" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="amount" fill="Blue" />
  <Bar dataKey="category" fill="Green" />
</BarChart>
    </div>;
};

export default Chart;