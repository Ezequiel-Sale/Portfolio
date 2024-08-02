import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'Ezequiel-Sale'; // Reemplaza con tu usuario
const ACCESS_TOKEN = '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'; // Reemplaza con tu token de acceso personal
const YOUR_GITHUB_USERNAME = 'Ezequiel-Sale'; // Reemplaza con tu nombre de usuario

interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  author?: {
    login: string;
  };
  url: string;
}

async function fetchAllRepos(): Promise<Array<{ owner: { login: string }; name: string }>> {
  console.log('Fetching repositories...');
  const response = await fetch(`${GITHUB_API_URL}/users/${USERNAME}/repos`, {
    headers: {
      Authorization: `token ${ACCESS_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error fetching repositories:', errorText);
    throw new Error('Error fetching repositories');
  }

  return response.json();
}

async function fetchAllCommitsFromRepo(owner: string, repo: string): Promise<Commit[]> {
  console.log(`Fetching commits from ${repo}...`);
  let allCommits: Commit[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}/commits?per_page=100&page=${page}`, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error fetching commits:', errorText);
      throw new Error('Error fetching commits');
    }

    const commits: Commit[] = await response.json();
    console.log(`Fetched ${commits.length} commits from ${repo} (Page ${page})`);
    
    // Filtra los commits por autor, asegurando que la propiedad author esté definida
    const filteredCommits = commits.filter(commit => commit.author?.login === YOUR_GITHUB_USERNAME);
    
    allCommits = allCommits.concat(filteredCommits);

    const linkHeader = response.headers.get('link');
    if (linkHeader && linkHeader.includes('rel="next"')) {
      page++;
    } else {
      hasMore = false;
    }
  }

  return allCommits;
}

export async function GET() {
  console.log('GET function started'); // Log para verificar ejecución
  try {
    const repos = await fetchAllRepos();
    const allCommits: Commit[] = [];

    for (const repo of repos) {
      console.log(`Fetching commits for ${repo.name}`);
      const commits = await fetchAllCommitsFromRepo(repo.owner.login, repo.name);
      allCommits.push(...commits);
    }

    console.log(`Total commits fetched: ${allCommits.length}`);
    return NextResponse.json(allCommits);
  } catch (error) {
    console.error('Error occurred:', error); // Log para errores
    return NextResponse.error();
  }
}
