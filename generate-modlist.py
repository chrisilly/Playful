import os

def generate_filelist_md(folder_path, filetype):
  """
  Generates a markdown file listing all files with the specified filetype in the given folder.

  Args:
    folder_path: Path to the folder containing the files.
    filetype: The file extension (e.g., ".py", ".txt") to search for.
  """
  # Create an empty list to store filenames
  filenames = []

  # Loop through all files in the folder
  for filename in os.listdir(folder_path):
    # Check if the file extension matches the desired type
    if filename.endswith(filetype):
      filenames.append(filename)

  # Sort the filenames alphabetically
  filenames.sort()

  # Create the markdown file content
  content = f"# Current modlist:\n\n"
  for filename in filenames:
    content += f"- {filename}\n"

  # Create the filename for the markdown file
  output_filename = f"modlist.md"

  # Write the content to the markdown file
  with open(output_filename, "w") as file:
    file.write(content)

  print(f"File list generated: {output_filename}")

# Example usage
folder_path = os.path.join(os.getcwd(), "mods")
filetype = ".jar"  # Change this to your desired filetype
generate_filelist_md(folder_path, filetype)