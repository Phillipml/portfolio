import { useGetUserRepoQuery } from '@/services/api'
import { RepoType } from '@/types/RepoType'

export const useRepoFilter = () => {
  const username = process.env.NEXT_PUBLIC_USERNAME
  const customList = process.env.NEXT_PUBLIC_REPOS_FILTER
  const filtered: string[] = customList ? JSON.parse(customList) : []
  const { data, error, isLoading } = useGetUserRepoQuery(username || '')

  const repoList: RepoType[] = data
    ? data?.filter((item) => filtered.includes(item.name))
    : []
  return { repoList, error, isLoading }
}
