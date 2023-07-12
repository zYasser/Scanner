from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    sql_url: str

    class Config:
        env_file = ".env"


settings = Settings()
