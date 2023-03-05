export async function getJobsData() {
    const res = await fetch(`https://my-resume-backend-prisma-8rmyw4i7m-acdeiiknprv.vercel.app/jobs`)
    const data = await res.json()
    return data
  }