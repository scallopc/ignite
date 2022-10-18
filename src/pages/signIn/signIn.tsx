
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../../components/button/button";
import { Checkbox } from "../../components/checkbox/checkbox";
import { Heading } from "../../components/heading/heading";
import { InputConfig } from "../../components/input/input";
import Text from "../../components/text/text";
import { Logo } from "../../Logo";
import "../../styles/global.css";

export function SignIn() {
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">E-mail</Text>
          <InputConfig.Root>
            <InputConfig.Icon>
              <Envelope />
            </InputConfig.Icon>

            <InputConfig.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </InputConfig.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Senha</Text>
          <InputConfig.Root>
            <InputConfig.Icon>
              <Lock />
            </InputConfig.Icon>

            <InputConfig.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </InputConfig.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2 items-center">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-100 cursor-pointer">Lembrar-me</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-100">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-100">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

    </div>
  );
}