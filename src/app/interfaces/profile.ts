export interface Profile {
  firstname: string;
  lastname: string;
  picture: string;
  weight: number;
  height: number;
  blood: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
  };
  allergies: [
    {
      name: string;
    },
    {
      name: string;
    },
    {
      name: string;
    }
  ];
  drugs: [
    {
      type: string;
      name: string;
    },
    {
      type: string;
      name: string;
    }
  ];
  organ_donor: boolean;
  others: string;
}
