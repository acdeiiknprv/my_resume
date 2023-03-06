export async function getJobsData() {
    const res = await fetch(`https://my-resume-backend-prisma-5qyqi0rox-acdeiiknprv.vercel.app/jobs`)
    const data = await res.json()
    return data
  }