import { ButtonBase, Drawer, Tooltip } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 4,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

function FilterDrawer({
  filterDrawer,
  setFilterDrawer,
  filterPriceRange,
  priceRange,
  setPriceRange,
  isPopular,
  setIsPopular,
  isLowToHigh,
  setIsLowToHigh,
  isHighToLow,
  setIsHighToLow,
  isNewest,
    setIsNewest,
  handleAllFilter,
}) {

    React.useEffect(() => {
        handleAllFilter();
    }, [isPopular, isLowToHigh, isHighToLow, isNewest, priceRange]);

  return (
    <Drawer
      anchor="bottom"
      open={filterDrawer}
      onClose={() => setFilterDrawer(false)}
      // border radius top
      sx={{
        "& .MuiDrawer-paper": {
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        },
      }}
    >
      <div className="container h-[45vh] bg-white flex flex-col p-5 items-start">
        <h2 className="font-bold text-lg">Filter</h2>
        <div className="flex justify-between gap-5 w-full pb-4 pt-3">
          <ButtonBase
            className={`${
              isPopular ? "bg-black text-white" : "bg-slate-100"
            } text-sm py-2 px-3 w-full rounded-full font-semibold`}
            onClick={() => {
              setIsPopular(true);
              setIsNewest(false);
            }}
          >
            Popular
          </ButtonBase>
          <ButtonBase
            className={`${
              isNewest ? "bg-black text-white" : "bg-slate-100"
            } text-sm py-2 px-3 w-full rounded-full font-semibold`}
            onClick={() => {
              setIsPopular(false);
              setIsNewest(true);
            }}
          >
            New Arrival
          </ButtonBase>
        </div>
        <div className="w-full mt-3">
          <h2 className="font-bold text-lg">Price</h2>
          <div className="flex justify-between gap-5 w-full pb-4 pt-3 mb-5">
            <ButtonBase
              className={`${
                isLowToHigh ? "bg-black text-white" : "bg-slate-100"
              } text-sm py-2 px-3 w-full rounded-full font-semibold`}
              onClick={() => {
                setIsLowToHigh(true);
                setIsHighToLow(false);
              }}
            >
              Low
            </ButtonBase>
            <ButtonBase
              className={`${
                isHighToLow ? "bg-black text-white" : "bg-slate-100"
              } text-sm py-2 px-3 w-full rounded-full font-semibold`}
              onClick={() => {
                setIsLowToHigh(false);
                setIsHighToLow(true);
              }}
            >
              High
            </ButtonBase>
          </div>
          <IOSSlider
            valueLabelDisplay="on"
            value={priceRange}
            getAriaLabel={() => "Price range"}
            onChange={(event, newValue) => setPriceRange(newValue)}
            getAriaValueText={(value) => value}
            max={250}
            track="false"
            valueLabelFormat={(value) => `${value}$`}
          />
        </div>
      </div>
    </Drawer>
  );
}

export default FilterDrawer;
