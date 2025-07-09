import { useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const PaymentForm = () => {
  const { totalCartPrice } = useSelector((state) => state.carts);
  function handleSubmit(e) {
    e.preventDefault();
    alert("Payment Initiated");
    console.log("form submitted");
  }
  return (
    <>
      <h3>Payment details</h3>
      <Tabs
        defaultActiveKey="credit"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="credit" title="Credit Card">
          <form className="creditform" onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Enter your Card Number
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Enter Card Expiry(MM/YY)
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Enter CVV
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Total Amount Pay:${totalCartPrice}
            </Typography>

            <div className="paymentsubmit">
              <Button variant="outlined" type="submit">
                Complete Payment
              </Button>
            </div>
          </form>
        </Tab>
        <Tab eventKey="cash" title="Cash On Delivery">
          <div className="creditform">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Cash Amount
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Enter CVV
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>
            <div>
              <Button variant="outlined" type="submit">
                Complete Payment
              </Button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default PaymentForm;
