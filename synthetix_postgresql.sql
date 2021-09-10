-- Database: d6rt4ec5napukl

-- DROP DATABASE d6rt4ec5napukl;

CREATE DATABASE d6rt4ec5napukl
    WITH 
    OWNER = fyfyunkmjdavrd
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT ALL ON DATABASE d6rt4ec5napukl TO fyfyunkmjdavrd;


-- SCHEMA: public

-- DROP SCHEMA public ;

CREATE SCHEMA public
    AUTHORIZATION fyfyunkmjdavrd;

COMMENT ON SCHEMA public
    IS 'standard public schema';

GRANT ALL ON SCHEMA public TO PUBLIC;

GRANT ALL ON SCHEMA public TO fyfyunkmjdavrd;


-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    user_name character varying(50) COLLATE pg_catalog."default",
    user_password character varying(255) COLLATE pg_catalog."default",
    created_at timestamp(0) with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(0) with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to fyfyunkmjdavrd;
	

-- Table: public.favourites

-- DROP TABLE public.favourites;

CREATE TABLE IF NOT EXISTS public.favourites
(
    favourite_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    created_at timestamp(0) with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(0) with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id integer NOT NULL,
    CONSTRAINT favourits_pkey PRIMARY KEY (favourite_id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.favourites
    OWNER to fyfyunkmjdavrd;


-- Table: public.favourite_book

-- DROP TABLE public.favourite_book;

CREATE TABLE IF NOT EXISTS public.favourite_book
(
    favourite_book_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    created_at timestamp(0) with time zone NOT NULL,
    updated_at timestamp(0) with time zone NOT NULL,
    book_id character varying COLLATE pg_catalog."default",
    favourite_id integer,
    CONSTRAINT favourite_book_pkey PRIMARY KEY (favourite_book_id),
    CONSTRAINT favourite_id_fkey FOREIGN KEY (favourite_id)
        REFERENCES public.favourites (favourite_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.favourite_book
    OWNER to fyfyunkmjdavrd;


-- Table: public.favourite_movie

-- DROP TABLE public.favourite_movie;

CREATE TABLE IF NOT EXISTS public.favourite_movie
(
    favourite_movie_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    favourite_id integer,
    movie_id character varying COLLATE pg_catalog."default",
    created_at timestamp(0) with time zone NOT NULL,
    updated_at timestamp(0) with time zone NOT NULL,
    CONSTRAINT favourite_movie_pkey PRIMARY KEY (favourite_movie_id),
    CONSTRAINT favourite_id FOREIGN KEY (favourite_id)
        REFERENCES public.favourites (favourite_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.favourite_movie
    OWNER to fyfyunkmjdavrd;