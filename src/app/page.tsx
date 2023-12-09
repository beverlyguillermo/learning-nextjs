import styles from './page.module.css'
import ClientLoginForm from "@/components/client-login-form"

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hello</p>
        <p>There</p>
      </div>

      <div className={styles.center}>
        <h1>Welcome
        </h1>
      </div>

      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
        >
          <h2>
            Login <span>-&gt</span>
          </h2>
          <p>Sign in via some providers</p>
        </a>

        <a
          href="/"
          className={styles.card}
        >
          <h2>
            Logout <span>-&gt</span>
          </h2>
          <p>Logout</p>
        </a>

        <a
          href="/"
          className={styles.card}
        >
          <h2>
            Register<span>-&gt</span>
          </h2>
          <p>Register Place Holder</p>
        </a>

        <a
          href="/"
          className={styles.card}
        >
          <h2>
            Placeholder <span>-&gt</span>
          </h2>
          <p>
            Placeholder
          </p>
        </a>
      </div>


      <div className={styles.grid}>
        <ClientLoginForm />
      </div>
    </main>
  )
}
