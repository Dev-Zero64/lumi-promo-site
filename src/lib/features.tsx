import { LucideIcon } from "lucide-react";

import {
  CheckCircle,
  Stethoscope,
  Calendar,
  Bell,
  HeartPulse,
  Shield,
} from "lucide-react";

export interface Feature {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Acompanhamento Completo",
    description:
      "Registro detalhado de todas as consultas, exames e medições importantes da gestação",
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Conecte-se com Profissionais",
    description: "Compartilhe seus dados diretamente com sua equipe médica",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Agendamento Inteligente",
    description: "Lembretes automáticos para consultas e exames importantes",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Alertas Personalizados",
    description:
      "Notificações sobre mudanças importantes em cada fase da gestação",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Monitoramento de Saúde",
    description:
      "Controle de pressão arterial, ganho de peso e movimentos fetais",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Segurança Máxima",
    description: "Seus dados protegidos com criptografia de última geração",
  },
];
