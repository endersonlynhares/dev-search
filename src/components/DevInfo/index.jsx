import { DevContainer, Infor, InforCommunity, InforSocial } from "./styles";
import { useContext, useEffect, useState } from "react";
import { DevContext } from "../../contexts/DevContext";
import UserImage from "../../assets/user-image.svg";
import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react";
import useFetch from "../../hooks/useFetch";
import LoadingGif from "../../assets/loading.gif";
export const DevInfo = () => {
  const { isLoading } = useContext(DevContext);
  const { dataUser: data } = useContext(DevContext);

  return (
    <DevContainer>
      {isLoading && <img width={22} src={LoadingGif} alt="Loading..." />}
      {data && (
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
