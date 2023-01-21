import { useEffect, useState } from 'react'
import { fetchUsers, fetchAllAlbums } from '../services/requests'
import Loader from '../components/ui/Loader'
import UsersList from '../components/users/UsersList'
import useTitle from '../hooks/useTitle'
import { Album, UserAlbum } from '../interfaces/typings'

function UsersPage() {
  useTitle('Users List')
  const [users, setUsers] = useState<UserAlbum[]>([])
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchUsersAndAlbums = async () => {
      setLoading(true)
      const [albumsRes, usersRes] = await Promise.all([
        fetchAllAlbums(),
        fetchUsers(),
      ])
      await usersRes.map((user: any) => {
        user.albumCount = albumsRes.filter(
          (album: any) => album.userId === user.id
        ).length
      })
      setUsers(usersRes)
      setAlbums(albumsRes)
      setLoading(false)
    }
    fetchUsersAndAlbums()

    return () => {
      //clean up hook
    }
  }, [])

  if (loading)
    return (
      <div className="flex items-center justify-center mt-28">
        <Loader />
      </div>
    )

  return (
    <div className="pt-12 pageMargin sm:pt-16 md:pt-0">
      <header className="mt-8 mb-8 text-xl text-center md:mt-20">
        Users List
      </header>
      <section>
        <UsersList users={users} />
      </section>
    </div>
  )
}

export default UsersPage
