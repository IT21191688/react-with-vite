function Customer() {
  const chunkArray = (array: any, chunkSize: any) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const customers = [
    {
      id: 1,
      avatar:
        "data:image/jpeg;base64,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",
      customerName: "Saman Kumara",
      description: "Java Developer",
      userProfile: "https://example.com/profile1",
    },
    {
      id: 2,
      avatar:
        "data:image/jpeg;base64,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",
      customerName: "Alice Smith",
      description: "Web Designer",
      userProfile: "https://example.com/profile2",
    },
    {
      id: 3,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEC6zbwXnxGSKfA_5wRBcZ1iU2yDiWcZ8oW5fZLML5nK28MUJibGPdYcIDmlgA_gqDBo&usqp=CAU",
      customerName: "John Doe",
      description: "Frontend Developer",
      userProfile: "https://example.com/profile3",
    },
    {
      id: 4,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEC6zbwXnxGSKfA_5wRBcZ1iU2yDiWcZ8oW5fZLML5nK28MUJibGPdYcIDmlgA_gqDBo&usqp=CAU",
      customerName: "John Doe",
      description: "Frontend Developer",
      userProfile: "https://example.com/profile3",
    },
    {
      id: 5,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEC6zbwXnxGSKfA_5wRBcZ1iU2yDiWcZ8oW5fZLML5nK28MUJibGPdYcIDmlgA_gqDBo&usqp=CAU",
      customerName: "John Doe",
      description: "Frontend Developer",
      userProfile: "https://example.com/profile3",
    },
  ];

  const handleCustomer = (customerName: String) => {
    console.log(customerName);
  };

  const chunkedCustomers = chunkArray(customers, 3);

  return (
    <>
      <h1 className="header">Customer Data</h1>
      <hr />
      <div className="container">
        {chunkedCustomers.map((row, index) => (
          <div className="row justify-content-center" key={index}>
            {row.map((customer: any) => (
              <div
                className="col-md-4"
                key={customer.id}
                onClick={() => {
                  handleCustomer(customer.customerName);
                }}
              >
                <div className="card mb-3">
                  <img
                    src={customer.avatar}
                    className="card-img-top"
                    alt="Customer Avatar"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{customer.customerName}</h5>
                    <p className="card-text">{customer.description}</p>
                    <a href={customer.userProfile} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Customer;
