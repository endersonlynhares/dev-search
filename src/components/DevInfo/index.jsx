import { DevContainer, Infor, InforCommunity, InforSocial, Loading } from "./styles";
import { useContext} from "react";
import { DevContext } from "../../contexts/DevContext";
import SpinnerDark from "../../assets/light_spinner.svg";
import SpinnerLight from "../../assets/dark_spinner.svg";
import { useTheme } from "styled-components";
import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react";

export const DevInfo = () => {
  const { dataUser: data, isLoading } = useContext(DevContext);

  const {title} = useTheme();

  return (
    <DevContainer>
      {isLoading && (
        <Loading>
          <img src={title == "dark" ? SpinnerDark : SpinnerLight} alt="loading" />
        </Loading>
      )}
      {!isLoading && data && (
        <>
          <div>
            <img src={data.avatar_url} alt="" />
          </div>
          <Infor>
            <header>
              <div>
                <h2>{data.name}</h2>
                <span>@{data.login}</span>
              </div>
              <span>joined 9 mar 2023</span>
            </header>
            <InforCommunity>
              <div>
                <span>Repos</span>
                <span>{data.public_repos}</span>
              </div>
              <div>
                <span>Followers</span>
                <span>{data.followers}</span>
              </div>
              <div>
                <span>Following</span>
                <span>{data.following}</span>
              </div>
            </InforCommunity>
            <InforSocial>
              <div>
                <MapPin size={22} weight="fill" />
                {data.location}
              </div>
              <div>
                <Link size={22} weight="bold" />
                {data.blog}
              </div>
              <div>
                <TwitterLogo size={22} weight="fill" />
                {data.company}
                {!data.company && "Not availabe"}
              </div>
              <div>
                <Buildings size={22} weight="fill" />
                {data.company}
              </div>
            </InforSocial>
          </Infor>
        </>
      )}
    </DevContainer>
  );
};
