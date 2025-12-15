const config = {
    appWriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProject: String(import.meta.env.VITE_PROJECT_ID),
    appWriteDatabase: String(import.meta.env.VITE_DATABASE_ID),
    appWriteCollection: String(import.meta.env.VITE_COLLECTION_ID),
    appWriteBucket: String(import.meta.env.VITE_BUCKET_ID)
}

export default config;