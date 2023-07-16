import "./cards.css";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  LightBulbIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";
import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

export default function Cards() {
  const productsCtx = useContext(ProductsContext);
  const listingsData = productsCtx.productsList.data.electricity;
  return (
    <div>
      {listingsData &&
        listingsData.map((product) => (
          <div className="card cardBody" key={product.id}>
            <div className="cardBorderTags">
              <div className="gray_box cardBorderTagBoxes">
                <LightBulbIcon className="borderIcon" />
                Electricity
              </div>
              <div className="gray_box cardBorderTagBoxes">
                <BuildingLibraryIcon className="borderIcon" />
                Solar
              </div>
            </div>
            <div className="cardBodyPadding">
              <div className="cardFlex">
                <div className="logoDivAlign">
                  <img
                    src={product.provider.logo}
                    alt="logo"
                    className="logoImg"
                  />
                  <div className="blue_h">View Details</div>
                  <div className="blue_h" href={product.plan_document}>
                    Basic Plan Information Discount
                  </div>
                </div>
                <div className="middleTopBox">
                  <div className="gray_box">
                    <div>{product.dmo_percentage.Ausgrid}</div>
                    <div>the current reference price</div>
                  </div>
                  <div className="features">
                    <span className="displayFlex">
                      <CheckIcon className="checkIcon" />
                      <p className="featuresPara">
                        12 Month Energy Plan Period
                      </p>
                    </span>
                    {product.view_benefit && (
                      <span className="displayFlex">
                        <CheckIcon className="checkIcon" />
                        <p
                          className="featuresPara"
                          dangerouslySetInnerHTML={{
                            __html: product.view_benefit,
                          }}
                        ></p>
                      </span>
                    )}
                    {product.view_bonus && (
                      <span className="displayFlex">
                        <CheckIcon className="checkIcon" />
                        <p
                          className="featuresPara"
                          dangerouslySetInnerHTML={{
                            __html: product.view_bonus,
                          }}
                        ></p>
                      </span>
                    )}
                    {product.view_contract && (
                      <span className="displayFlex">
                        <CheckIcon className="checkIcon" />
                        <p
                          className="featuresPara"
                          dangerouslySetInnerHTML={{
                            __html: product.view_contract,
                          }}
                        ></p>
                      </span>
                    )}
                    {product.view_exit_fee && (
                      <span className="displayFlex">
                        <CheckIcon className="checkIcon" />
                        <p
                          className="featuresPara"
                          dangerouslySetInnerHTML={{
                            __html: product.view_exit_fee,
                          }}
                        ></p>
                      </span>
                    )}
                    <span className="feedInTarrifBox displayFlex">
                      <ExclamationTriangleIcon className="checkIcon" />
                      <p className="featuresPara">
                        Standard Feed in Tariff: 5c
                      </p>
                    </span>
                  </div>
                </div>

                <div className="card text-white bg-primary mb-3 estimatedCostBox">
                  <div className="card-header estimatedCostHeader">
                    Estimated Cost
                    <InformationCircleIcon className="cardInformationCircleIcon" />
                  </div>
                  <div className="card-body estimatedCostBody">
                    <div className="estimatedCostPerYear">
                      <CurrencyDollarIcon className="currencyDollarIconYear" />
                      <h2>
                        {product.expected_annually_bill_amount}^
                        <span className="estimatedCostPerYearSpan">/yr</span>
                      </h2>
                    </div>

                    <div className="estimatedCostPerMonth">
                      <CurrencyDollarIcon className="currencyDollarIconMonth" />
                      <h3>
                        {product.expected_monthly_bill_amount_deferit}
                        <span className="estimatedCostPerMonthSpan">/mo</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="descriptionDiv">
                <p
                  dangerouslySetInnerHTML={{
                    __html: product.dmo_content.Ausgrid,
                  }}
                ></p>
              </div>
            </div>

            <div className="cardFooter">
              <div>
                <div className="displayFlex">
                  <span className="displayFlex">
                    {" "}
                    <CheckIcon className="checkIcon" />
                    <p>10 business days cooling off period</p>
                  </span>
                  <span className="displayFlex">
                    {" "}
                    <CheckIcon className="checkIcon" />
                    <p>Secure signup in 5 min</p>
                  </span>
                  <span className="displayFlex">
                    {" "}
                    <CheckIcon className="checkIcon" />
                    <p>Save time and effort</p>
                  </span>
                </div>

                <p className="footerText">
                  ^ The estimated cost includes any applicable welcome credits,
                  bonuses, and conditional discounts (if applicable) which apply
                  within the first 12 months of plan.
                </p>
              </div>
              <div className="btnConnectDiv">
                <button className="btnConnect">Connect Online Today</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
