import React, { useEffect, useContext } from "react";
import "./listingsHome.css";
import Cards from "../cards/cards";
import {
  InformationCircleIcon,
  FunnelIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { fetchData } from "@/pages/api/api";
import { ProductsContext } from "../context/productsContext";

export default function ListingsHome() {
  const productsCtx = useContext(ProductsContext);

  useEffect(() => {
    fetchData()
      .then((data) => {
        productsCtx.dispatchedProductsState({
          type: "FETCHED_PRODUCTS_LIST",
          payload: data,
        });
        // Handle fulfilled state and process the data
        console.log("Data received successfully", data);
      })
      .catch((error) => {
        // Handle rejected state and log the error
        console.log("Request failed:", error.message);
      });
  }, []);

  return (
    <>
      {productsCtx.productsList.length === 0 ? (
        <div className="loadingSpinnerMain">
          <div className="loadingSpinnerPosition">
            <div
              className="spinner-border text-primary loadingSpinner"
              role="status"
            ></div>
          </div>
        </div>
      ) : (
        <div className="mainBody">
          <div>
            <div className="topContentDiv">
              <div className="electricityDiv">
                Electricity
                <span className="electricityCircle">
                  {productsCtx.productsList.data.electricity.length}
                </span>
              </div>
              <div className="filterDiv">
                <div className="NSWDiv">
                  <MapPinIcon className="mapIcon" />
                  2000, NSW
                </div>
                <button className="filterBtn">
                  <FunnelIcon className="funnelIcon" />
                  Filter
                </button>
              </div>
            </div>
            <div className="subHeadingDiv">
              <p>
                <InformationCircleIcon className="informationCircleIcon" />{" "}
                Initial recommendations are based on average medium usage
                determined by relevant energy regulations, please view the
                information hover next to the estimated cost box for more
                information. For a more accurate comparison relevant to your
                circumstances, please use the Bill Details tab on the results
                page to enter your most recent energy bill details.
              </p>
            </div>
          </div>
          {productsCtx.productsList && (
            <Cards responseData={productsCtx.productsList.data} />
          )}
        </div>
      )}
    </>
  );
}
