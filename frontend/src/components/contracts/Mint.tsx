import React, { useState } from "react";

export function Mint({
  mintTokens,
}: {
  mintTokens: (arg0: string) => Promise<void>;
}) {
  let [mintCount, setMintCount] = useState(1);
  return (
    <div data-sal-delay={400} data-sal="slide-up" data-sal-duration={800}>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target as HTMLFormElement);
          // const receiver = formData.get("receiver") as string;
          const receiver = mintCount.toString();
          console.log(receiver);

          if (receiver) {
            mintTokens(receiver);
          }
        }}
      >
        <div className="form-group"></div>
        <br />
        <div className="form-group mt-5">
          <input
            className="btn btn-large btn-primary-alta sal-animate"
            type="submit"
            value="Mint"
          />
        </div>
      </form>
    </div>
  );
}
