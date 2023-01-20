function UserDetails({ user }: { user: any }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 px-10 md:py-2 gradient">
      <div className="p-1">
        <span className="font-bold">Name</span>:{user?.name}
      </div>
      <div className="p-1">
        <span className="font-bold">Username</span>:{user?.username}
      </div>
      <div className="p-1">
        <span className="font-bold">Email</span>:{user?.email}
      </div>

      <div className="p-1">
        <span className="font-bold">Phone</span>:{user?.phone}
      </div>

      <div className="p-1">
        <span className="font-bold">Street</span>:{user?.address.street}
      </div>

      <div className="p-1">
        <span className="font-bold">zipcode</span>:{user?.address.zipcode}
      </div>
    </section>
  )
}

export default UserDetails
