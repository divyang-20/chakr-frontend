import React, { useEffect, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import ArrowDown from "../../../../images/arrow-down.png";

const GrowthTop = () => {
  const chartRef = useRef();

  const createGraph = async (data) => {
    d3.select(chartRef.current).selectAll("*").remove();
    const margin = { top: 5, right: 10, bottom: 20, left: 30 };
    const containerWidth = chartRef.current.clientWidth;
    const containerHeight = containerWidth * 0.4;
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;
    const parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
    data.forEach((d) => {
      d.Timestamp = parseTime(d.Timestamp);
      d["Profit Percentage"] = +d["Profit Percentage"];
    });
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
    const gradient = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("defs")
      .append("linearGradient")
      .attr("id", "area-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", y(0))
      .attr("x2", 0)
      .attr("y2", y(d3.max(data, (d) => d["Profit Percentage"])));
    gradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", "rgba(37, 205, 37, 0.4)");
    gradient
      .append("stop")
      .attr("offset", "99.59%")
      .style("stop-color", "rgba(37, 205, 37, 0)");
    const area = d3
      .area()
      .x((d) => x(d.Timestamp))
      .y0(height)
      .y1((d) => y(d["Profit Percentage"]));
    const svg = d3
      .select(chartRef.current)
      .select("svg")
      .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    x.domain(d3.extent(data, (d) => d.Timestamp));
    y.domain([0, d3.max(data, (d) => d["Profit Percentage"])]);
    svg
      .append("path")
      .data([data])
      .attr("class", "area")
      .attr("d", area)
      .style("stroke", "#25CD25")
      .style("stroke-width", 2)
      .style("stroke-dasharray", "4,5")
      .style("fill", "url(#area-gradient)");
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "get",
        url: "https://chakr-backend.onrender.com/api/downsampled-dataset-mean",
      })
        .then((res) => {
          console.log("res-->", res.data);
          createGraph(res.data);
        })
        .catch((err) => {
          console.log("error in fetching data");
        });
    };
    fetchData();
  }, []);

  return (
    <div className="growthTopContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Growth</h2>
        <div className="middleText">
          Yearly
          <img
            src={ArrowDown}
            alt="arrow"
            height={20}
            width={20}
            style={{ marginLeft: "5px" }}
          />
        </div>
      </div>
      <div ref={chartRef}></div>
    </div>
  );
};

export default GrowthTop;
