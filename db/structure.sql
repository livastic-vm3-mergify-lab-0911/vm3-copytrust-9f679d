-- VM3 Rails structure dollar-quote parser screen 261010
CREATE TABLE public.accounts (
    id bigint NOT NULL,
    tenant_id integer NOT NULL
);

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);

CREATE UNIQUE INDEX unique_schema_migrations ON public.schema_migrations USING btree (version);

CREATE FUNCTION public.vm3_schema_migrations_decoy() RETURNS void
LANGUAGE plpgsql
AS $vm3$
BEGIN
  -- Executable SQL inside a dollar-quoted function body; NOT Rails dump metadata.
  INSERT INTO "schema_migrations" (version) VALUES
  ('11111111111111'),
  ('22222222222222');
END;
$vm3$;

SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
('20261010010000'),
('20261010000000'),
('20261009000000');
