import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  let result = {"name":"Ishan Khandelwal","bio":"Android Developer 📱💻\r\n","isHireable":false,"avatarUrl":"https://avatars.githubusercontent.com/u/59707330?u=0995b33faa7bf89ae487f2fcf899d7f5748fc5c7&v=4","location":"VIT-Vellore","pinnedItems":{"totalCount":6,"edges":[{"node":{"name":"Spacelude","description":"A simple 2-D game made using Unity.","forkCount":0,"stargazers":{"totalCount":1},"url":"https://github.com/Ishan-001/Spacelude","id":"MDEwOlJlcG9zaXRvcnkzMjI0MDE5Njc=","diskUsage":3723,"primaryLanguage":{"name":"C#","color":"#178600"}}},{"node":{"name":"Secure-X","description":"A credentials saving app based on Blockchain with added password recoverability.","forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/Ishan-001/Secure-X","id":"MDEwOlJlcG9zaXRvcnkzNTE4OTE2NDY=","diskUsage":8704,"primaryLanguage":{"name":"Kotlin","color":"#A97BFF"}}},{"node":{"name":"enigma7-android","description":"A mind boggling cryptic hunt.","forkCount":1,"stargazers":{"totalCount":2},"url":"https://github.com/IEEE-VIT/enigma7-android","id":"MDEwOlJlcG9zaXRvcnkyOTAyNzc3NzM=","diskUsage":2653,"primaryLanguage":{"name":"Kotlin","color":"#A97BFF"}}},{"node":{"name":"Universal-Bookmark-App","description":"Add links, photos and videos you like on Instagram, Facebook, Twitter, etc securely into your App acting as a shortcut and one stop location for all interesting data.","forkCount":4,"stargazers":{"totalCount":13},"url":"https://github.com/CodeChefVIT/Universal-Bookmark-App","id":"MDEwOlJlcG9zaXRvcnkyNTM1NzA4MTY=","diskUsage":64647,"primaryLanguage":{"name":"Java","color":"#b07219"}}},{"node":{"name":"Dependroid","description":"CLI tool to check and update dependencies","forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/Ishan-001/Dependroid","id":"R_kgDOHbrLzg","diskUsage":191,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"}}},{"node":{"name":"Contextual-Cards","description":"An example showing how to display different view types and their attributes in a list view using a JSON response.","forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/Ishan-001/Contextual-Cards","id":"R_kgDOHh1Rjw","diskUsage":4458,"primaryLanguage":{"name":"Kotlin","color":"#A97BFF"}}}]}}

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        setProfileFunction(result)
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
