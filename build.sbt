import sbt._
import Keys._
import play.Project._

name := "admin-transform"

version := "1.0-SNAPSHOT"

resolvers += "ed eustace" at "http://edeustace.com/repository/releases"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  "com.ee" %% "assets-loader" % "0.12.1"
)     

play.Project.playScalaSettings
