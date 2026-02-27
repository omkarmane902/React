import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setList(res.data))
  }, [])

  return (
    <div
      style={{
        backgroundColor: "#eef2f7",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "25px"
      }}
    >
      {list.map((cart) => (
        <div
          key={cart.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
          }}
        >
          <img
            src={cart.image}
            alt={cart.title}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              borderRight: "1px solid #ddd",
              paddingRight: "15px"
            }}
          />

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
              {cart.title}
            </h2>

            <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>
              {cart.description.slice(0, 80)}...
            </p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#2c3e50" }}>
                ₹ {cart.price}
              </span>

              <span style={{
                backgroundColor: "#27ae60",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "12px"
              }}>
                ⭐ {cart.rating.rate}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Api