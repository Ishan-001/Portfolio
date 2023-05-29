import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  let result = {"name":"Ishan Khandelwal","bio":"Android Developer 📱💻\r\n","isHireable":false,"avatarUrl":"https://avatars.githubusercontent.com/u/59707330?u=0995b33faa7bf89ae487f2fcf899d7f5748fc5c7&v=4","location":"VIT-Vellore","pinnedItems":{"totalCount":6,"edges":[{"node":{"name":"Spacelude","description":"A simple 2-D game made using Unity.","forkCount":0,"stargazers":{"totalCount":1},"url":"https://github.com/Ishan-001/Spacelude","id":"MDEwOlJlcG9zaXRvcnkzMjI0MDE5Njc=","diskUsage":3723,"primaryLanguage":{"name":"C#","color":"#178600"}}},{"node":{"name":"Secure-X","description":"A credentials saving app based on Blockchain with added password recoverability.","forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/Ishan-001/Secure-X","id":"MDEwOlJlcG9zaXRvcnkzNTE4OTE2NDY=","diskUsage":8704,"primaryLanguage":{"name":"Kotlin","color":"#A97BFF"}}},{"node":{"name":"enigma7-android","description":"A mind boggling cryptic hunt.","forkCount":1,"stargazers":{"totalCount":2},"url":"https://github.com/IEEE-VIT/enigma7-android","id":"MDEwOlJlcG9zaXRvcnkyOTAyNzc3NzM=","diskUsage":2653,"primaryLanguage":{"name":"Kotlin","color":"#A97BFF"}}},{"node":{"name":"Universal-Bookmark-App","description":"Add links, photos and videos you like on Instagram, Facebook, Twitter, etc securely into your App acting as a shortcut and one stop location for all interesting data.","forkCount":4,"stargazers":{"totalCount":13},"url":"https://github.com/CodeChefVIT/Universal-Bookmark-App","id":"MDEwOlJlcG9zaXRvcnkyNTM1NzA4MTY=","diskUsage":64647,"primaryLanguage":{"name":"Java","color":"#b07219"}}},{"node":{"name":"Dependroid","description":"CLI tool to check and update dependencies","forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/Ishan-001/Dependroid","id":"R_kgDOHbrLzg","diskUsage":191,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}},{"node":{"name":"Package-Generator","description":"IntelliJ IDEA plugin to generate packages from YAML","forkCount":0,"stargazers":{"totalCount":1},"url":"https://github.com/Ishan-001/Package-Generator","id":"R_kgDOJjMQdw","diskUsage":7,"primaryLanguage":{"name":"Java","color":"#b07219"}}}]}}

  useEffect(() => {
    const getRepoData = () => {
      setrepoFunction(result.pinnedItems.edges)
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
