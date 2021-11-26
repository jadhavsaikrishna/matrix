import React from "react";
import styles from "./styles.css";
const Matrix = () => {
  const data1 = ["#Box1", "#Box2", "#Box3", "#Box4"];
  const data2 = ["#Box5", "#Box6", "#Box7", "#Box8"];
  const data3 = ["#Box9", "#Box10", "#Box11", "#Box12"];
  const data4 = ["#Box13", "#Box14", "#Box15", "#Box16"];

  const handleClick = (e) => {
    e.target.bgColor = "red";
  };

  return (
    <table>
      <tr>
        {data1.map((box) => {
          return (
            <td id={box} onClick={handleClick} bgColor="blue">
              {box}
            </td>
          );
        })}
      </tr>

      <tr>
        {data2.map((box) => {
          return (
            <td id={box} onClick={handleClick} bgColor="blue">
              {box}
            </td>
          );
        })}
      </tr>
      <tr>
        {data3.map((box) => {
          return (
            <td id={box} onClick={handleClick} bgColor="blue">
              {box}
            </td>
          );
        })}
      </tr>
      <tr>
        {data4.map((box) => {
          return (
            <td id={box} onClick={handleClick} bgColor="blue">
              {box}
            </td>
          );
        })}
      </tr>
    </table>
  );
};

export default Matrix;
