import FormField from "components/common/FormField/FormField";

export default function BillingDetailsFields() {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Jane Doe"
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="California"
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94103"
      />
    </>
  );
}
