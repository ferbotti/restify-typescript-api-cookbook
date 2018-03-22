export interface Owner {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface Repository {
    id: number;
    name: string;
    full_name: string;
    owner: Owner;
    private: boolean;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url?: any;
    open_issues_count: number;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}


export interface ORIGIN {
    origin: string;
}

export class SSA_PF {
    api:string = "DeviceManager";
    url:string =  "/device-manager/pick-challenge";
    endpointPath:string =  "/pick-challenge";
    request_id:string = "D127\r\nX";
    hostname:string =  "backend-169-170g8";
    method:string =  "POST";
    logMessage:string = "TKScUbF2utdbtYa63bxVpr3ewPPkhlqphUTiomlaliUnmiYlL5l1RMKlPFpPJExYnKVDGpfFLFN6mcVLyhclIxqUwVk8pUcaIyVbxxsdZat4u11rpdrLXWzf7gL1KZKk5UTiomlZOKSeWJiknlp\r\nOJE5Y2KE5Wp4kRlqphUnqiYVKaKJ1ROKiaVqWJSOamYVKaKSWWqmFROKn7TxVpr3S7WWut2sdZaN/uDL1KZKiaVqWJSOak4UZkqJpWpYlI5qXhC5aTiCZWTit+k8kbFGypPVEwq31TxhMpJxSddrLXW7WKttW4Xa611sz/4i1SmihOVqeIJlScqJpWTikllqphUnqh4Q+Wk4kTliYoT\r\nlU+qOFGZKj5J5aRiUjmpmFSmik+"
  }

