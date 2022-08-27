import Select from "react-select";

export function SelectUser({ setCurrentUser }) {
  const userOptions = [
    {
      label: "Aluno",
      value: "estudante",
    },
    {
      label: "Professor",
      value: "professor",
    },
    {
      label: "Coordenador",
      value: "coordenador",
    },
    {
      label: "Responsável",
      value: "responsável",
    },
  ];

  const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'white',
    cursor: 'pointer',
    padding: 20,
    border: 0,
    backgroundColor: "#200B41",
    "&:hover": {
      backgroundColor: "#5819BB"
    }
  }),
  defaultValue: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
 }),
 control: (base, state) => ({
  ...base,
  backgroundColor: '#200B41',
  color: 'white',
  border: state.isFocused ? 0 : 0,
  // This line disable the blue border
  boxShadow: state.isFocused ? 0 : 0,
  '&:hover': {
     border: state.isFocused ? 0 : 0
  }
}),
  
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

  return (
    <>
      <h2 className="formTitle">
        Acesse a sua <span> conta</span>
      </h2>

      <Select
        sx={{paddingLeft: "15px"}}
        styles={customStyles}
        options={userOptions}
        name="usuario"
        onChange={(e) => setCurrentUser(e.value)}
        //onChange={e => setCurrentUser(e.value)}
        placeholder={<div className="p1">Quem é você?</div>}
      ></Select>
    </>
  );
}
