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

  return (
    <>
      <h2 className="formTitle">
        Acesse a sua <span> conta</span>
      </h2>

      <Select
        options={userOptions}
        name="usuario"
        onChange={(e) => setCurrentUser(e.value)}
        //onChange={e => setCurrentUser(e.value)}
        defaultValue={{ label: "Quem você é?", value: "" }}
      ></Select>
    </>
  );
}
