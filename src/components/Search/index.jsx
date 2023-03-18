import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer } from "./styles";
import { useForm } from "react-hook-form";
import { DevContext } from "../../contexts/DevContext";
import { useContext, useEffect } from "react";

export const Search = () => {
  const { updateDataUser,dataUser, getUserByUsername, setIsLoading } = useContext(DevContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "octokit",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true)
    getUserByUsername(data.username)
      .then((response) => {
        updateDataUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SearchContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MagnifyingGlass size={32} />
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Search Github username..."
        />
      </div>
      <button type="submit">Search</button>
    </SearchContainer>
  );
};
