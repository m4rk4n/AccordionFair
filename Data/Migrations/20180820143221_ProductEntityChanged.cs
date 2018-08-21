using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AccordionFair.Migrations
{
    public partial class ProductEntityChanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ArtDating",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ArtDescription",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ArtistBirthDate",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ArtistDeathDate",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "ArtistNationality",
                table: "Products",
                newName: "Weight");

            migrationBuilder.RenameColumn(
                name: "Artist",
                table: "Products",
                newName: "Registers");

            migrationBuilder.RenameColumn(
                name: "ArtId",
                table: "Products",
                newName: "Reeds");

            migrationBuilder.AddColumn<int>(
                name: "Basses",
                table: "Products",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Cassoto",
                table: "Products",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Keys",
                table: "Products",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Basses",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Cassoto",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Keys",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Weight",
                table: "Products",
                newName: "ArtistNationality");

            migrationBuilder.RenameColumn(
                name: "Registers",
                table: "Products",
                newName: "Artist");

            migrationBuilder.RenameColumn(
                name: "Reeds",
                table: "Products",
                newName: "ArtId");

            migrationBuilder.AddColumn<string>(
                name: "ArtDating",
                table: "Products",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ArtDescription",
                table: "Products",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ArtistBirthDate",
                table: "Products",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "ArtistDeathDate",
                table: "Products",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
