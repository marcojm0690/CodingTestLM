USE [Prueba]
GO

/****** Object:  Table [dbo].[Actividad]    Script Date: 10/3/2023 09:39:56 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Actividad](
	[Id_actividad] [int] IDENTITY(1,1) NOT NULL,
	[create_date] [date] NOT NULL,
	[Id_usuario] [int] NOT NULL,
	[actividad] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Actividad] PRIMARY KEY CLUSTERED 
(
	[Id_actividad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Actividad]  WITH CHECK ADD  CONSTRAINT [FK_Actividad_Actividad] FOREIGN KEY([Id_usuario])
REFERENCES [dbo].[Users] ([Id])
GO

ALTER TABLE [dbo].[Actividad] CHECK CONSTRAINT [FK_Actividad_Actividad]
GO


